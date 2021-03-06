// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var offcialpack = offcialpack || {};

/**
 * @constructor
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ=} obj
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.getRootAsT_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ = function(bb, obj) {
  return (obj || new offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.messageId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {number} index
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.toFansLst = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.toFansLstLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint64Array}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.toFansLstArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.groupId = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {commonpack.S_MSG=} obj
 * @returns {commonpack.S_MSG}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.prototype.sMsg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? (obj || new commonpack.S_MSG).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.startT_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} messageId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.addMessageId = function(builder, messageId) {
  builder.addFieldInt64(1, messageId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} toFansLstOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.addToFansLst = function(builder, toFansLstOffset) {
  builder.addFieldOffset(2, toFansLstOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Long>} data
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.createToFansLstVector = function(builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.startToFansLstVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.addGroupId = function(builder, groupId) {
  builder.addFieldInt64(3, groupId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sMsgOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.addSMsg = function(builder, sMsgOffset) {
  builder.addFieldOffset(4, sMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.endT_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQ.finishT_CLIENT_OFFCIAL_SEND_SOME_SYS_MSG_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.offcialpack = offcialpack;
