# automatically generated by the FlatBuffers compiler, do not modify

# namespace: scpack

import flatbuffers

class T_GET_USER_STATUS_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GET_USER_STATUS_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GET_USER_STATUS_RQ()
        x.Init(buf, n + offset)
        return x

    # T_GET_USER_STATUS_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GET_USER_STATUS_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def T_GET_USER_STATUS_RQStart(builder): builder.StartObject(1)
def T_GET_USER_STATUS_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_GET_USER_STATUS_RQEnd(builder): return builder.EndObject()
