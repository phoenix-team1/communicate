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
grouppack.T_GROUP_LIST_IDS_RQ = function() {
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
 * @returns {grouppack.T_GROUP_LIST_IDS_RQ}
 */
grouppack.T_GROUP_LIST_IDS_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {grouppack.T_GROUP_LIST_IDS_RQ=} obj
 * @returns {grouppack.T_GROUP_LIST_IDS_RQ}
 */
grouppack.T_GROUP_LIST_IDS_RQ.getRootAsT_GROUP_LIST_IDS_RQ = function(bb, obj) {
  return (obj || new grouppack.T_GROUP_LIST_IDS_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
grouppack.T_GROUP_LIST_IDS_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_LIST_IDS_RQ.prototype.groupListIndex = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
grouppack.T_GROUP_LIST_IDS_RQ.startT_GROUP_LIST_IDS_RQ = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
grouppack.T_GROUP_LIST_IDS_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} groupListIndex
 */
grouppack.T_GROUP_LIST_IDS_RQ.addGroupListIndex = function(builder, groupListIndex) {
  builder.addFieldInt32(1, groupListIndex, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
grouppack.T_GROUP_LIST_IDS_RQ.endT_GROUP_LIST_IDS_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
grouppack.T_GROUP_LIST_IDS_RQ.finishT_GROUP_LIST_IDS_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.grouppack = grouppack;
