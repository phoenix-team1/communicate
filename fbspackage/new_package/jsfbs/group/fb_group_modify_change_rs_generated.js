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
var grouppack = grouppack || {};

/**
 * @constructor
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS = function() {
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
 * @returns {grouppack.T_GROUP_MODIFY_ChANGE_RS}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {grouppack.T_GROUP_MODIFY_ChANGE_RS=} obj
 * @returns {grouppack.T_GROUP_MODIFY_ChANGE_RS}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.getRootAsT_GROUP_MODIFY_ChANGE_RS = function(bb, obj) {
  return (obj || new grouppack.T_GROUP_MODIFY_ChANGE_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {grouppack.T_GROUP_BASE_INFO=} obj
 * @returns {grouppack.T_GROUP_BASE_INFO}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.prototype.groupInfo = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new grouppack.T_GROUP_BASE_INFO).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {grouppack.T_OFFLINE_GROUP_MSG=} obj
 * @returns {grouppack.T_OFFLINE_GROUP_MSG}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.prototype.offlineGroupMsg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new grouppack.T_OFFLINE_GROUP_MSG).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.startT_GROUP_MODIFY_ChANGE_RS = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupInfoOffset
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.addGroupInfo = function(builder, groupInfoOffset) {
  builder.addFieldOffset(1, groupInfoOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offlineGroupMsgOffset
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.addOfflineGroupMsg = function(builder, offlineGroupMsgOffset) {
  builder.addFieldOffset(2, offlineGroupMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.endT_GROUP_MODIFY_ChANGE_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
grouppack.T_GROUP_MODIFY_ChANGE_RS.finishT_GROUP_MODIFY_ChANGE_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.grouppack = grouppack;